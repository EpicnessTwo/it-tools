export { convertArrayToPhp };

function convertArrayToPhp(array: { array: any }, indentSize: { indentSize: any }): string {
  if (indentSize < 0) {
    throw new Error('indentSize must be a positive integer');
  }

  const convertToPhpArray = (obj: any, indentSize: number = 4, level: number = 0): string => {
    const indentString = ' '.repeat(indentSize);
    const indent = indentString.repeat(level);
    const innerIndent = indentString.repeat(level + 1);

    const newlinesString = (indentSize > 0) ? '\n' : '';

    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        return '[]';
      }
      const arrayItems = obj.map(element => `${innerIndent}${convertToPhpArray(element, indentSize, level + 1)}`);
      return `[${newlinesString}${arrayItems.join(', ' + newlinesString)},${newlinesString}${indent}]`;
    } else if (typeof obj === 'object' && obj !== null) {
      if (! obj.length > 1) {
        return '[]';
      }
      const objectItems = Object.entries(obj).map(([key, value]) =>
          `${innerIndent}'${key}' => ${convertToPhpArray(value, indentSize, level + 1)}`
      );
      return `[${newlinesString}${objectItems.join(', ' + newlinesString)},${newlinesString}${indent}]`;
    } else if (typeof obj === 'string') {
      return `'${obj.replace(/'/g, "\\'")}'`;
    } else if (obj === null) {
      return 'null';
    } else {
      return obj.toString();
    }
  };

  return '$array = ' + convertToPhpArray(array) + ';';
}

