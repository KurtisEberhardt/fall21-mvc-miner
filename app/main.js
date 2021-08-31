import RupeeController from "./Controllers/RupeeController.js";
import ItemController from "./Controllers/ItemController.js"
class App {
rupeeController = new RupeeController();

itemController = new ItemController();
}

window["app"] = new App();
