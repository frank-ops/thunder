import {surpriseMePrompts} from '../constants'
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt){
    const randomIndex=Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
     if(randomPrompt === prompt) return getRandomPrompt(prompt);

     return randomPrompt;
}

const blobURL = URL.createObjectURL(blob);
    // Create the `<a download>` element and append it invisibly.
    const a = document.createElement('a');
    a.href = blobURL;
    a.download = suggestedName;
    a.style.display = 'none';
    document.body.append(a);
    // Programmatically click the element.
    a.click();
    // Revoke the blob URL and remove the element.
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
      a.remove();
    }, 1000);
  };
export async function downloadImg(_id,photo){
    const blob = await fetch(photo).then((response) => response.blob());
    console.log(blob)
 saveFile(blob,"download")
}
