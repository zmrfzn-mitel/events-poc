# Events Manager Poc

## Details

Makes use of Observer Pattern using RxJs.

[JIRA SBOSS-22545](https://voko.atlassian.net/browse/SBOSS-22545) 

#### Custom Event Type

```
export interface ICuxEvent 
{
    identifier?: string;
    type: string;
    eventData: any;
}
```

## Usage

### Basic Usage

#### Creating Events
Create an event object of type ICuxEvent with the given name.

`customEvent: ICuxEvent = new CuxEvent('eventName');`


#### Send/Emit Events

Inject `EventsManagerService` in the component.

`constructor(private eventSvc: EventsManagerService) { }`

add the data to the event Object and send.

```
this.customEvent.eventData = 'Custom Event Data';
this.eventSvc.send(this.customEvent);
```

#### Listen/Subscribe Events

Listen/Subscribe to the created event with its name. 

```
this.eventSvc.listen('eventName').subscribe(evt => {
        // Do your thing
});
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.
