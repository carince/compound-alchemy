import pico from "picocolors";

class Logger {
    public static async log(label: string, message: string): Promise<void> {
        console.log((`${pico.bgGreenBright(pico.black(` ${label} `))} ${pico.greenBright(message)}`));
    }

    public static info(label: string, message: string): void {
        if (process.env.VERBOSE) {
            console.log(`${pico.bgBlueBright(` ${label} `)} ${pico.blueBright(message)}`);
        }
    }

    public static warn(label: string, message: string): void {
        console.log(`${pico.bgYellowBright(pico.black(` ▲ ${label} `))} ${pico.yellowBright(message)}`);
    }

    public static async error(label: string, message: string, options?: { forceClose?: boolean }): Promise<void> {
        console.log(`${pico.bgRedBright(` ⬣ ${label} `)} ${pico.redBright(message)}`);
        if (options?.forceClose) process.exit(1);
    }

    public static async debug(data: string): Promise<void> {
        console.log(`${pico.bgMagentaBright(" ⬣ DEBUG ")} ${pico.magentaBright(data)}`);
    }
}

export { Logger };