import { GetHandler } from "./helper/bad.resolve";
import { targetSite } from './configs/config.json';

(async () => {
    let handler = GetHandler();
    await handler.ExecutePerPage(targetSite);
})();