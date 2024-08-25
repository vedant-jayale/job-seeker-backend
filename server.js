import  app from "./app.js";
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: 'dfgxnffcx',
    api_key: '653719774231671',
    api_secret: 'GAOzHvPdmhHbTr1OZomqQvivn-E',
  });

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  