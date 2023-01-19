/// <reference types ="nativewind/types" />

interface IDoctor {
  email: string;
  fullname: string;
  phone: string;
  gender: string;
  clinic: string;
  photo: string;
  id?: string;
}

interface CustomModalProps extends IDoctor {
  showModal: any;
  setShowModal: any;
  style: StyleProp;
}
