function WhoAmI() {
   return (
      <div>
         <div className='main-bg-color'>
            <h3>Who is <span>Harshal?</span></h3>
            <div className='who-am-i flex-with-center ' style={{ backgroundImage: `url('./images/blob.svg')` }} >
               <div>
                  <h3>Hello There!!!</h3>
                  <hr />
                  <p><pre>{JSON.stringify({
                     name: "Harshal Moon",
                     from: "Maha,In",
                     age: 22,
                     gender: "Male",
                     prog_lang:"java"
                  }, null, 2)}</pre></p>
               </div>
            </div>
         </div>
      </div>
   )
}
export default WhoAmI;