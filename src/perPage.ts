import { GetHandler } from "./helper/bad.resolve";
import { targetSite } from './configs/config.json';
import { logTotalResult } from "./helper/functions.utils";

(async () => {
    let handler = GetHandler();
    let totalData = await handler.ExecutePerPage(targetSite);
    logTotalResult(totalData);
})();