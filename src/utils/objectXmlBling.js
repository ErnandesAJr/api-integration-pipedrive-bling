import jsontoxml from 'jsontoxml';

const mountXmlForRequestBling = (id, title, value, products_count, person_name)=> {
        const xml = jsontoxml({
        pedido: [
          {
            name: 'cliente',
            children: [
              { name: 'nome', text: 'Fantasia' },
            ],
          },
          {
            name: 'itens',
            children: [
              { name: 'item',
              children: [
                { name: 'codigo', text: 8667|| 1 },
                { name: 'descricao', text: title || 'Won Deal' },
                { name: 'un', text: 'Un' },
                { name: 'qtde', text: products_count || 1 },
                { name: 'vlr_unit', text: value || 0 },
              ]}
            ],
          },
          
        ]
        }, false);
  return xml
}
  
export default mountXmlForRequestBling;

