import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Card from '../../components/card';

let Home = {
  render: async () => {
    let view = `
      ${Nav}
      <div class="container">
         <div class="container-item">${Card}</div>
         <div class="container-item">${Card}</div>
         <div class="container-item">${Card}</div>
         <div class="container-item">${Card}</div>
         <div class="container-item">${Card}</div>
      </div>
      ${Footer}
    `;
    return view;
  },
  after_render: async () => {},
};

export default Home;
