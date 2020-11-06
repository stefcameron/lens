import { LensMainExtension } from "@k8slens/extensions";

export default class ExampleExtensionMain extends LensMainExtension {
  async onActivate() {
    console.log('EXAMPLE EXTENSION MAIN: ACTIVATED', this.id, this.name, this.version)
    console.log("EXAMPLE EXTENSION MAIN: has access to special folder", await this.getExtensionFileFolder())
    throw 5
  }

  onDeactivate() {
    console.log('EXAMPLE EXTENSION MAIN: DEACTIVATED', this.id, this.name, this.version)
  }
}
