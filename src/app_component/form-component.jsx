import React from "react";

const Form = (props) => {
  function afiseazaVremea(functie, e) {
    e.preventDefault();
    console.log("Vremea va fi afisata");
    functie();
  }

  return (
    <div className='container'>
      <form>
        <div className='row'>
          <div className='col-md-3 offset-md-2'>
            <input
              type='text'
              className='form-control'
              name='city'
              autoComplete='off'
              placeholder='Oras...'
            />
          </div>
          <div className='col-md-3'>
            <input
              type='text'
              className='form-control'
              name='country'
              autoComplete='off'
              placeholder='Tara...'
            />
          </div>
          <div className='col-md-3 mt-md-0 text-md-left'>
            <button
              className='btn btn-warning'
              id='vreme'
              onClick={props.afiseazavremea}
            >
              Afiseaza Vremea
            </button>
            <button
              className='btn  btn-primary'
              id='prognoza'
              onClick={props.afiseazavremea}
            >
              Afiseaza Prognoza
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
