import SignaturePad from 'signature_pad';

window.onload =() => {
    console.log('%chello world', 'color:green;');
    let signatureApi = new SignatureApi('signature_canvas');
    document.getElementById('test_btn').addEventListener('click', ev => {
        signatureApi.get_signature();
    })
}

class SignatureApi{
    constructor(canvas_id){
        const canvas = document.getElementById(canvas_id);
        this.signaturePad = new SignaturePad(canvas);
    }

    get_signature(){
        let image = this.signaturePad.toDataURL();
        console.log(image)
        console.log(typeof(image))
    }
    download(){
        let image = this.get_signature()
        console.log('%cThis has not been implemented as yet', 'color:orange;');
    }
    send_to_server(){
        let image = this.get_signature()
        console.log('%cThis has not been implemented as yet', 'color:orange;');
    }
}