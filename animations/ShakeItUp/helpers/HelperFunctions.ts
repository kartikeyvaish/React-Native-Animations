// function to shuffle the array
export function ShuffleArray(array: Array<any>) {
    let temp = [...array];

    let visited = new Array(temp.length).fill(false);

    for (let i = 0; i < temp.length; i++) {
        let randomIndex;

        while (true) {
            randomIndex = Math.floor(Math.random() * temp.length);

            if (visited[randomIndex] === false) {
                visited[randomIndex] = true;
                break;
            }
        }

        temp[i] = { ...temp[i], id: randomIndex };
    }

    return temp;
}