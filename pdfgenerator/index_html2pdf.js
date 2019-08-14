import SignaturePad from 'signature_pad';
import html2pdf from 'html2pdf.js';

window.onload = () => {
    console.log($('#btn_jspdf'))

    console.log('%cLoaded - jspdf.js', 'color:blue');
    let api = new API(['signature_1', 'signature_2']);
    document.getElementById('btn_jspdf').addEventListener('click', ev => {
        api.getImage(document.getElementById('root'));
    })
}

class API {
    constructor(canvas_ids) {
        this.pads = canvas_ids.map(id => {
            return new SignaturePad(document.getElementById(id))
        })
    }

    getPDF(elem) {
        html2pdf(elem)
    }

    get_signature(){
        let image = this.signaturePad.toDataURL();
        console.log(image)
        console.log(typeof(image))
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

        // const elementHandler = {
        //     '#ignorePDF': (element, renderer) => true
        // };
        // let doc = jsPDF();
        // console.log(doc.fromHTML)
        // // fromHTML(HTML, x, y, settings, callback, margins)
        // doc.fromHTML(elem, 0, 0, { 'width': 200, 'elementHandlers': elementHandler }, test)
        // function test(out) {
        //     console.log(out);
        //     doc.save('test.pdf');
        //     // doc.output("dataurlnewwindow");
        // }