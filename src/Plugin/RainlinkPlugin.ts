import { RainlinkPluginType } from '../Interface/Constants';
import { Rainlink } from '../Rainlink';

/** The interface class for another rainlink plugin, extend it to use */
export class RainlinkPlugin {
  /** Name function for getting plugin name */
  public name(): string {
    throw new Error('Plugin must implement name() and return a plguin name string');
  }

  /** Type function for diferent type of plugin */
  public type(): RainlinkPluginType {
    throw new Error('Plugin must implement type() and return "sourceResolver" or "default"');
  }

  /** Load function for make the plugin working */
  public load(manager: Rainlink): void {
    throw new Error('Plugin must implement load()');
  }

  /** unload function for make the plugin stop working */
  public unload(manager: Rainlink): void {
    throw new Error('Plugin must implement unload()');
  }
}
