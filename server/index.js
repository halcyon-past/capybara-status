/*
https://i.chzbgr.com/full/9725064448/h10C13351/animal-isita-phase-capybaratext-or-am-actually-just-like-this-general -> 408
https://i.chzbgr.com/full/9725060864/h9A742EFE/person-s-beautiful-looked-at-this-five-hours-now -> 200
https://i.chzbgr.com/full/9725059584/h656F7057/animal-s-happening -> 404
https://i.chzbgr.com/full/9725062400/hB027C9A3/animal-new-hair-dont-care -> 400
https://i.chzbgr.com/full/9725062144/h54172188/hat-merry-crisis -> 401
https://i.chzbgr.com/full/9725064960/h83998A7D/animal-no-jokes-today-only-pain-capybaratext -> 403
https://i.chzbgr.com/full/9725061120/h5BDBFE50/person-capy_club -> 202
https://i.chzbgr.com/full/9725061632/h961AA349/animal-lion-king-0 -> 201
https://i.chzbgr.com/full/9725067264/hFB5A0E18/37-every-capybara-is-certified-interior-designer-let-one-into-home-if-looking-ideas-spruce-up-place -> 406

*/

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({stat: 'Capybara is running!'});
    }
);

app.get('/api/capybara', (req, res) => {
    res.json({url: 'https://i.chzbgr.com/full/9725064704/hFD795457/packaged-goods-sus-capybaratext',stat:'A wild capybara appeared!',msg: "Capybara says 'Hello!'"});
    }
);

app.get('/api/400', (req, res) => {
    res.status(200).json({url: 'https://i.chzbgr.com/full/9725062400/hB027C9A3/animal-new-hair-dont-care',stat: 400, msg: "Capybara says 'Bad Request'"});
    }
);

app.get('/api/401', (req, res) => {
    res.status(200).json({url: 'https://i.chzbgr.com/full/9725062144/h54172188/hat-merry-crisis',stat: 401, msg: "Capybara says 'Unauthorized'"});
    }
);

app.get('/api/408', (req, res) => {
    res.status(200).json({url: 'https://i.chzbgr.com/full/9725064960/h83998A7D/animal-no-jokes-today-only-pain-capybaratext',stat: 408, msg: "Capybara says 'Request Timeout'"});
    }
);

app.get('/api/403', (req, res) => {
    res.status(200).json({url: 'https://i.chzbgr.com/full/9725064960/h83998A7D/animal-no-jokes-today-only-pain-capybaratext',stat: 403, msg: "Capybara says 'Forbidden'"});
    }
);

app.get('/api/404', (req, res) => {
    res.status(200).json({url: 'https://i.chzbgr.com/full/9725059584/h656F7057/animal-s-happening',stat: 404, msg: "Capybara says 'Not Found'"});
    }
);

app.get('/api/406', (req, res) => {
    res.status(200).json({url: 'https://i.chzbgr.com/full/9725067264/hFB5A0E18/37-every-capybara-is-certified-interior-designer-let-one-into-home-if-looking-ideas-spruce-up-place',stat: 406, msg: "Capybara says 'Not Acceptable'"});
    }
);

app.get('/api/202', (req, res) => {
    res.status(200).json({url: 'https://i.chzbgr.com/full/9725061120/h5BDBFE50/person-capy_club',stat: 202, msg: "Capybara says 'Accepted'"});
    }
);

app.get('/api/201', (req, res) => {
    res.status(200).json({url: 'https://i.chzbgr.com/full/9725061632/h961AA349/animal-lion-king-0',stat: 201, msg: "Capybara says 'Created'"});
    }
);

app.get('/api/200', (req, res) => {
    res.status(200).json({url: 'https://i.chzbgr.com/full/9725060864/h9A742EFE/person-s-beautiful-looked-at-this-five-hours-now',stat: 200, msg: "Capybara says 'OK 👍🏻'"});
    }
);

app.listen(port, () => {
    console.log(`Capybara is listening at http://localhost:${port}`);
    }
);