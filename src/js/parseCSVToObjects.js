export default (csvString) => {
  // 简单的 CSV 解析器（处理引号内的逗号）
  const rows = [];
  const regex = /(?:,|^)(?:"([^"]*(?:""[^"]*)*)"|([^",]*))/g;
  let row = [];
  let match;
  let lastIndex = 0;
  
  // 先拆分行（注意处理换行符在引号内的情况）
  // 一个更稳妥的方式是逐行解析，但为了兼容换行，这里用简单分行并处理引号包裹的换行。
  // 为了代码清晰，这里实现一个标准解析函数
  const result = [];
  const lines = csvString.split(/\r?\n/);
  if (lines.length === 0) return result;
  
  // 获取表头
  const headers = [];
  const headerMatches = lines[0].match(regex);
  for (let i = 0; i < headerMatches.length; i++) {
    let val = headerMatches[i];
    if (val[0] === ',') val = val.slice(1);
    if (val[0] === '"' && val[val.length-1] === '"') {
      val = val.slice(1, -1).replace(/""/g, '"');
    }
    headers.push(val);
  }
  
  // 解析数据行（处理可能的引号内换行，这里简化：假设数据行不包含换行）
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === "") continue;
    
    const values = [];
    let current = "";
    let inQuotes = false;
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      if (ch === '"') {
        if (inQuotes && line[j+1] === '"') {
          current += '"';
          j++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === ',' && !inQuotes) {
        values.push(current);
        current = "";
      } else {
        current += ch;
      }
    }
    values.push(current);
    
    // 将值映射到对象
    const obj = {};
    for (let k = 0; k < headers.length; k++) {
      let val = values[k] !== undefined ? values[k] : "";
      // 去掉首尾空格（可选）
      if (typeof val === 'string') val = val.trim();
      obj[headers[k]] = val;
    }
    result.push(obj);
  }
  return result;
}