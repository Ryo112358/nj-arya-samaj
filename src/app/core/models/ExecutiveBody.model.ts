import { Deserializable } from './deserializable.model';

import { Executive } from './Executive.model';

export class ExecutiveBody implements Deserializable {

    public executives: Executive[];
    public trustees: String[];
    public purohits: String[];

    deserialize(input: any): this {
        // Assign input to our object BEFORE deserialize our executives to prevent already deserialized execs from being overwritten
        Object.assign(this, input);

        // Iterate over all executives for our ExecBody and map them to a proper `Executive` model
        this.executives = input.executives.map(executive => new Executive().deserialize(executive));

        return this;
    }

}