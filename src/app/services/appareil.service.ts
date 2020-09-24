export class AppareilService {

  matos = [
          { name: 'Ordinateur', status: 'mandeha' },
          { name: 'Imprimante', status: 'maty' },
          { name: 'Onduleur', status: 'maty' },
          { name: 'Sparta', status: 'maty' },
  ];



  ApretoJiaby() {
          for(let matos of this.matos) {
                  matos.status = 'mandeha'
          }
  }


  VonoyJiaby() {
          for(let matos of this.matos) {
                  matos.status = 'maty'
          }
  }

  VonoyZa(index: number){
          this.matos[index].status = 'maty';
  }

 ApretoZa(index: number){
          this.matos[index].status = 'mandeha';
  }

} 