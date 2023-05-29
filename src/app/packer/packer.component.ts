import { Component } from '@angular/core';

@Component({
  selector: 'app-packer',
  templateUrl: './packer.component.html',
  styleUrls: ['./packer.component.css']
})
export class PackerComponent {
  outputText: string = '';

  input: string = '';

  constructor() {}

  //Check if any file were selected, if files variable is not empty then call then process file function
  processInput(fileInput: HTMLInputElement): void {
    const files: FileList | null = fileInput.files;
    
    if (files && files.length > 0) {
      console.log('File Uploaded',files);
      this.processFile(files);
    }
  }
  

  processFile(files: FileList): void {
    const file: File = files[0];
    const reader: FileReader = new FileReader();
  
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target && event.target.result) {
        const fileContent: string = event.target.result as string;
        console.log(this.input)
        
        try {
          const result: string = this.packItems(fileContent);
          console.log(result);
          this.outputText = result;
        } catch (error: any) {
          console.error('Error:', error);
          this.outputText = `Error: ${error.message}`;
        }
      }
    };
  
    reader.readAsText(file);
  }
  

/*--------------------------------------------------------------
The function attempts to pack the file's items using the packItems method after reading the file's text content. 
It sets the outputText property to an error message and logs any errors that happen to the console.
--------------------------------------------------------------*/
  packItems(input: string): string {
    const testCases = input.trim().split('\n');
    let output = '';
  
    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i].trim();
  
      if (testCase === '') {
        continue;
      }
  
      const [weightLimit, itemsStr] = testCase.split(':');
      const weightLimitNum = parseInt(weightLimit.trim());
      const items = itemsStr.split(')');
  
      const weights = [];
      const costs = [];
  
      for (let j = 0; j < items.length - 1; j++) {
        const item = items[j].trim().substring(1);
        const [index, weight, cost] = item.split(',');
  
        weights.push(parseFloat(weight.trim()));
        costs.push(parseFloat(cost.trim().substring(1)));
      }
  
      const result = this.findOptimalItems(weightLimitNum, weights, costs);
  
      output += result + '\n';
    }
  
    return output.trim();
  }

 

/*--------------------------------------------------------------
 The code takes in an array of weights and an array of costs (presumably of the same length), as well as a weight limit, 
 and returns the maximum value that can be obtained by selecting items such that the total weight is less than or equal to the weight limit.

--------------------------------------------------------------*/
  private findOptimalItems(weightLimit: number, weights: number[], costs: number[]): string {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(weightLimit + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= weightLimit; j++) {
        if (weights[i - 1] > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], costs[i - 1] + dp[i - 1][j - weights[i - 1]]);
        }
      }
    }
  
    let currentWeight = weightLimit;
    const selectedItems = [];
  
    for (let i = n; i > 0 && currentWeight > 0; i--) {
      if (dp[i][currentWeight] !== dp[i - 1][currentWeight]) {
        selectedItems.push(i);
        currentWeight -= weights[i - 1];
      }
    }
  
    return selectedItems.length === 0 ? '-' : selectedItems.reverse().join(',');
  }
  
}
