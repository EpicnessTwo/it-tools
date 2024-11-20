export { convertArrayToPhp };

function convertArrayToPhp(jsonString: string, indentSize: number): string | null {
  try {
    const jsonObject = JSON.parse(jsonString);

    function convertToPhpArray(obj: any, indentLevel: number = 0): string {
      const indent = ' '.repeat(indentSize * indentLevel); // Indentation based on provided size
      const childIndent = ' '.repeat(indentSize * (indentLevel + 1));

      if (Array.isArray(obj)) {
        const elements = obj
          .map((el) => `${childIndent}${convertToPhpArray(el, indentLevel + 1)}`)
          .join(",\n");
        return `[\n${elements}\n${indent}]`;
      } else if (obj !== null && typeof obj === 'object') {
        const elements = Object.entries(obj)
          .map(([key, value]) => `${childIndent}'${key}' => ${convertToPhpArray(value, indentLevel + 1)}`)
          .join(",\n");
        return `[\n${elements}\n${indent}]`;
      } else if (typeof obj === 'string') {
        return `'${obj.replace(/'/g, "\\'")}'`;
      } else if (typeof obj === 'number' || typeof obj === 'boolean') {
        return `${obj}`;
      } else if (obj === null) {
        return 'null';
      } else {
        throw new Error(`Unsupported data type: ${typeof obj}`);
      }
    }
    return convertToPhpArray(jsonObject);
  } catch (error) {
    console.error('Invalid JSON string:', error.message);
    return null;
  }
}

