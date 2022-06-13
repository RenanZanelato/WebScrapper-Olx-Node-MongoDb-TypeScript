export interface IHandler
{
    Execute(targetSite: string) : Promise<void>;
    ExecutePerPage(targetSite: string) : Promise<void>;
}
