import { Deserializable } from './deserializable.model';

export class Executive implements Deserializable {

    public position: String;
    public name: String;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}