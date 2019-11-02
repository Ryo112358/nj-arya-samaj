import { Deserializable } from './deserializable.model';

export class ExecutiveBody implements Deserializable {

    president: String;
    vicePresident: String;
    secretary: String;
    treasurer: String;
    publicRelationsOfficer: String;

    trustees: String[];
    purohits: String[];
    members: String[];
    
    deserialize(input: any): this {
        return Object.assign(this, input);
    }
    
}