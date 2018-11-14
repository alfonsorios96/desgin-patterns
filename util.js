// logging helper

const log = () => {
    let log = "";

    return {
        add: msg => {
            log += msg + "\n";
        },
        show: () => {
            console.log(log);
            log = "";
        }
    }
};

module.exports = log();
