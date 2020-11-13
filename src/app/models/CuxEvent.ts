export interface ICuxEvent {
    identifier?: string;
    type: string;
    eventData: any;
  }

  export class CuxEvent implements ICuxEvent {


    // interface props
    identifier = '';
    type;
    eventData;

    // named constructor
    constructor(_type: string) {
      this.type = _type;
      this.identifier = this.getUUID();
    }

    getUUID(): string {
      // https://gist.github.com/gordonbrander/2230317
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  }
