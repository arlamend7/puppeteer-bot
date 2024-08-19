import * as path from "path";
import * as fs from "fs";

export const distPath = "./output/";

export class FileGenerator {
  static createPath(filePath: string) {
    try {
      // Extract the folder pa
      filePath = distPath + filePath;
      const folderPath = path.dirname(filePath);

      // Create folders if they don't exist
      fs.mkdirSync(folderPath, { recursive: true });
    } catch (err) {
      console.error(`Error creating path: ${err}`);
    }
  }

  static createFile(filePath: string, content: string): void {
    try {
      this.createPath(filePath);
      // Create the file
      fs.writeFileSync(distPath + filePath, content);

      console.log(`File created successfully at ${filePath}`);
    } catch (err) {
      console.error(`Error creating file: ${err}`);
    }
  }
}
