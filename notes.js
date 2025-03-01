var fs=require('fs');
const addNotes=function(title,body){
    
        console.log('add')
const notes=loadNotes();
//console.log(notes)
notes.push({title:title,body:body});
saveNotes(notes);
    


}
const saveNotes=function(notes){
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

 const loadNotes= function()
{
    try
    {
        var fileData=fs.readFileSync('notes.json');
        return JSON.parse(fileData.toString());

    }
    catch(e)
    {
        //console.log(e)
        return [];
    }
   

}

removeNotes=function()
{

}
module.exports={addNotes:addNotes}