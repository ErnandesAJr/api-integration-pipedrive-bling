import jsontoxml from 'jsontoxml';

const mountXmlForRequestBling = (titleProduct,valueProduct, qtyProduct, nameClient)=> {
        const xml = jsontoxml({
        pedido: [
          {
            name: 'cliente',
            children: [
              { name: 'nome', text: nameClient ||'Fantasy' },
            ],
          },
          {
            name: 'itens',
            children: [
              { name: 'item',
              children: [
                { name: 'codigo', text: 1 },
                { name: 'descricao', text: titleProduct || 'Won Deal' },
                { name: 'un', text: 'Un' },
                { name: 'qtde', text: qtyProduct || 1 },
                { name: 'vlr_unit', text: valueProduct || 0 },
              ]}
            ],
          },
          
        ]
        }, false);
  return xml
}
  
export default mountXmlForRequestBling;

