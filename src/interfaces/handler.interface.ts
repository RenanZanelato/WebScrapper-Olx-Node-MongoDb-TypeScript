export interface IHandler
{
    Execute(targetSite: string) : Promise<number>;
    ExecutePerPage(targetSite: string) : Promise<number>;
}
