export class Command {
    constructor(name, description, syntax, ...aliases) {
        this.name = name;
        this.description = description;
        this.syntax = syntax;
        this.aliases = aliases;
    }

    onCommand(args, command) {
        throw new Error("onCommand must be implemented by subclass");
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getSyntax() {
        return this.syntax;
    }

    setSyntax(syntax) {
        this.syntax = syntax;
    }

    getAliases() {
        return this.aliases;
    }

    setAliases(aliases) {
        this.aliases = aliases;
    }
}
