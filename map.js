const arr = [
    {
        name: "Amin",
        group : "Science"
    },
    {
        name: "Limon",
        group : "Business Studies"
    },
    {
        name: "Masud",
        group : "Humanities"
    }
    
]

const arr2 = arr.map((x) => {
    return `${x.name} from  ${x.group}  group`
})

console.log(arr2)

