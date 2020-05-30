if (document.readyState === 'loading') {
    const iAD = document.querySelector('#iAD');
    const iADs = document.querySelectorAll('.iAD');
    
    const iAC = document.querySelector('#iAC');
    const iACs = document.querySelectorAll('.iAC');
    
    const iDV = document.querySelector('#iDV');
    const iDVs = document.querySelectorAll('.iDV');

    const totAcq = document.querySelector('#totAcq');
    const totAcqs = document.querySelectorAll('.totAcq');
    
    const totVend = document.querySelector('#totVend');
    const totVends = document.querySelectorAll('.totVend');
    
    const ivaEsc = document.querySelector('#ivaEsc');
    const ivaEscs = document.querySelectorAll('.ivaEsc');
    
    const iva = document.querySelector('#iva');
    const ivas = document.querySelectorAll('.iva');
    
    const ivaInc = document.querySelector('#ivaInc');
    const ivaIncs = document.querySelectorAll('.ivaInc');
    
    const inputs = document.getElementsByTagName('input');

    [].forEach.call(inputs,input => input.addEventListener("change",e=>calcIvaDovuta()));

    function calcIvaDovuta(){
        let val_totAcq = parseFloat(totAcq.value);
        let val_totVend = parseFloat(totVend.value);

        let val_ivaEsc = parseFloat(ivaEsc.value);
        let val_iva = parseFloat(iva.value);
        let val_ivaInc = parseFloat(ivaInc.value);
        
        let val_iAD = val_totVend*val_iva/val_ivaInc;
        let val_iAC = val_totAcq/val_ivaEsc*val_iva;
        let val_iDV = val_iAD - val_iAC;

        iAC.value=val_iAC;
        iAD.value=val_iAD;
        iDV.value=val_iDV;

        ivaEsc.value=val_ivaEsc;
        iva.value=val_iva;
        ivaInc.value=val_ivaEsc+val_iva;

        [].forEach.call(totAcqs,ele=>ele.value=val_totAcq);
        [].forEach.call(totVends,ele=>ele.value=val_totVend);

        [].forEach.call(iACs,ele=>ele.value=val_iAC);
        [].forEach.call(iADs,ele=>ele.value=val_iAD);
        [].forEach.call(iDVs,ele=>ele.value=val_iDV);

        [].forEach.call(ivaEscs,ele=>ele.value=val_ivaEsc);
        [].forEach.call(ivas,ele=>ele.value=val_iva);
        [].forEach.call(ivaIncs,ele=>ele.value=val_ivaInc);
    };

}