const moment = require('moment');

module.exports = (data) => {
    return`

    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
                .invoice-box {
                    max-width: 800px;
                    margin: auto;
                    padding: 30px;
                    border: 1px solid #eee;
                    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
                    font-size: 6px;
                    line-height: 24px;
                    font-family: 'Helvetica Neue', 'Helvetica',
                    color: #555;
                }
                table
                {
                    background-color: white;
                    width: 100%;
                    text-align: left;
                    border-collapse: collapse;
                }

                th, td
                {
                    padding: -10px; 
                    font-size: 6px;
                    border: solid 1px black;
                }

                thead
                {
                    border-bottom: solid 1px grey;
                }
                .recuadrotexto
                {
                    margin-top: 2px;
                    width: 100%;
                    border: grey 1px solid;
                    border-collapse: collapse;
                    border-radius: 4%;
                }
                .firmaRepartidor
                {
                    margin-left: 30%;
                }
          </style>
       </head>
       <body>
          <div class="invoice-box">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> Producto </th>
                            <th> Cantidad </th>
                            <th> Total </th>
                        </tr>
                    </thead>
                    <tbody>
                        ${
                            data.prodcutos.map(a => {
                                return "<tr>" + "<td>" + a + "</td>" + "<td>" + a + "</td>" + "<td>" + a + "</td>" + "</tr>"
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="recuadrotexto">
                <h1>PAGARÉ</h1>
                <p>
                    debo y pagare incodicionalmente por este pagare a la oden de ALEJANDRO ALVARADO GOMEZ a quien ha de pagarse, en el domicilio
                    HIDALGO 365 COLONIA SAN PEDRO TLAQUEPAQUE JALISCO, EL DIA ____________${moment().format('L')}__________, LA CANTIDAD DE
                    __________15,178_________ (SON:________<span>***QUINCE MIL CIENTO SETENTA Y OCHO PESOS 00/100***</span>_____), VALOR
                    RECIBIDO A MI ENTERA SATISFACCION.
                    Este pagare es mercantil y esta regido por la Ley General de Titulos y Operaciones de Crédito en su articulo 173 parte final
                    y demas articulos correlativos por no ser pagare domiciliado
                    De no verificarse el pago de la cantidad que este pagare expresa el dia de su vencimiento abonare el redito de 20% mensualmente,
                    por todo el tiempo que este insoluto sin perjuicio de cobro mas los gastos que por ello se originen.
                </p>
                <div style="display: inline-block;">
                    <p>
                        TLAQUEPAQUE JALISCO A:_________${moment().format('L')}___________.<br>
                        ISLAS BALTICAS 4425 1-22<br>
                        COL. SAUZ, GUADALAJARA, JALISCO<br>
                        C.P. TEL: 33670425<br>
                    </p>
                </div>
                <div class="firmaRepartidor" style="display: inline-block;">
                    <p >
                        __________________________________________<br>
                        IGNACIO NAVARRO ANGULO
                    </p>
                </div>
            </div>
          </div>
       </body>
    </html>

    `;
}