function stringSplit(){
    const fullname = "harold  thomas  galdo bautista"
    const fullname_fixed=fullname.replaceAll("  "," ")
    const array_fullname=fullname.split(" ")
    console.log(fullname_fixed)

}

function stringReplace(){
    const fullname = "harold  thomas  galdo bautista"
    const fullname_replaced=fullname.replace("a","o")
    const  fullname_replaced_all=fullname.replaceAll("a","o")
    console.log(fullname)
    console.log(fullname_replaced)
    console.log(fullname_replaced_all)
}

function stringLength(){
    const fullname = "harold  thomas  galdo bautista"
    const fullname_length=fullname.length
    console.log(fullname)
    console.log(fullname_length)
    const fullname_no_white_spaces=fullname.replaceAll(" ","")
    const fullname_no_white_spaces_length=fullname.length
    console.log(fullname_no_white_spaces)
    console.log(fullname_no_white_spaces_length)
}

function stringSlice(){
    const fullname="harold thomas galdo bautista"
    const fullname_sliced=fullname.slice(0,5)
    console.log(fullname_sliced)
}

function stringSlice_vs_Substring(){
    const fullname="harold thomas galdo bautista"
    const fullname_sliced=fullname.slice(0,5)
    console.log(fullname_sliced)

    const fullname_substring=fullname.substring(11,15)
    console.log(fullname_substring)
}