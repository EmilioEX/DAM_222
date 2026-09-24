async function main(){
    console.log("Inician 5 seg");
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            console.log(".")
        }, 2500);
    }
    console.log("También inicia en 5 seg");
}

main()