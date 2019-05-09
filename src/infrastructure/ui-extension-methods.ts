import { AngularProjectConfigLoader } from "../core/angular/angular-project-config-loader";
import { FileHelper } from "../core/integration/file-helper";
import * as vscode from "vscode";
import { Adapter } from "../adapter";
import { KarmaHelper } from "../core/karma/karma-helper";

export class UIExtensionMethods {
  public constructor(private readonly testExplorerAdapter: Adapter) {
    const karmaHelper = new KarmaHelper();
    if (karmaHelper.isKarmaBasedProject(testExplorerAdapter.workspaceRootPath)) {
      vscode.commands.executeCommand("setContext", "isAngularEnviroment", true);
    } else {
      vscode.commands.executeCommand("setContext", "isAngularEnviroment", false);
    }
  }

  public async createSelectProjectQuickPick(): Promise<void> {
    const angularProjectConfigLoader = new AngularProjectConfigLoader(this.testExplorerAdapter.workspaceRootPath, new FileHelper());
    const loadedProjects = angularProjectConfigLoader.getAllAngularProjectsConfig(this.testExplorerAdapter.workspaceRootPath);
    const selectedProject = await vscode.window.showQuickPick(loadedProjects.map(x => x.name), {
      placeHolder: "Select project",
    });

    await this.testExplorerAdapter.load(selectedProject);
  }
}
