export interface IPublisher<TModel> {
    sendMessages(message : TModel) : Promise<void>;
}