import EventType from "./eventType";

export default interface IError {
    type: EventType;
    payload?: any;
}
