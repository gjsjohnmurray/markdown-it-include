// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as upath from 'upath';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	let root: string = '';
	if (vscode.workspace.workspaceFolders?.length) {
		root = vscode.workspace.workspaceFolders[0].uri.fsPath;
	}

	if (!root) {
		vscode.window.showErrorMessage('The markdown-it-include extension requires an open folder or workspace');
		return;
	}
	vscode.window.showInformationMessage(`The markdown-it-include root is ${root}`);

	return {
		extendMarkdownIt(md: any) {
		  return md.use(require('markdown-it-include'), {
			  root,
			  throwError: false
			});
	  	}
	};
}

// this method is called when your extension is deactivated
export function deactivate() {}
