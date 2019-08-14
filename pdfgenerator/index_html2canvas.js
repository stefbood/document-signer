import html2canvas from 'html2canvas';
import SignaturePad from 'signature_pad';
// import { promises } from 'fs';
window.onload = () => {
    console.log('%cLoaded - html2canvas', 'color:green');
    let api = new API(['signature_1', 'signature_2']);
    document.getElementById('btn_save').addEventListener('click', ev => {
        api.getImage(document.getElementById('root'));
    })
}








class API {
    constructor(canvas_ids) {
        this.pads = canvas_ids.map(id => {
            return new SignaturePad(document.getElementById(id))
        })
        console.log(this.pads)
    }

    getImage(elem) {
        html2canvas(elem, { allowTaint: true, useCORS: true }).then(canvas => {
            let image = canvas.toDataURL('application/pdf'); //simple but images does not render, try blob
            // canvas.toBlob(blob => {
            //     this.download_image(blob)
            // })
            console.log(image)
        })
    }


    download_image(blob) {
        let a = document.createElement("a");
        a.style = "display: none";
        document.body.appendChild(a);
        console.log(window.URL.createObjectURL)
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'test';
        a.click();
        window.URL.revokeObjectURL(url);
    }
}