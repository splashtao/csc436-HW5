import  {Injectable} from '@angular/core';
import  {Animal} from '../animal.model';
import  {PyramidRow} from '../pyramid-row/pyramid-row.model';

@Injectable()
export class PyramidRowService {

  animals : PyramidRow[] = [];
  initAnimals : Animal[];

  constructor() {

    this.initAnimals = [
      new Animal (1,"Raptor",'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/webdr02/2013/2/26/14/enhanced-buzz-7447-1361905446-6.jpg'),
      new Animal (2,"Tigher",'https://upload.wikimedia.org/wikipedia/commons/a/a4/White-tiger-2407799_1280.jpg'),
      new Animal (2,"Orca", 'http://news.nationalgeographic.com/content/dam/news/2016/10/06/Orca/orca.jpg'),
      new Animal (3,'Wolf','https://goo.gl/LnEVL3'),
      new Animal (3,'Cheetah','https://dg2d3wxprq381.cloudfront.net/cms/sites/default/files/header-cheetah-sperka.jpg?itok=AmmbqO_K'),
      new Animal (3,'Dolphin','http://dzcioi75h35h1.cloudfront.net/wp-content/uploads/dolphin-facts.jpg'),
      new Animal (4,'Owl','http://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_owl.jpg'),
      new Animal (4,'Fox','http://elelur.com/data_images/mammals/red-fox/red-fox-03.jpg'),
      new Animal (4,'Squid','https://media.wired.com/photos/59267a7af3e2356fd8009636/master/w_2400,c_limit/SquidTA_BM5309.jpg'),
      new Animal (4,'Lizzard','https://pre00.deviantart.net/4b46/th/pre/f/2010/156/d/4/lizzard_by_dhampirion.jpg'),
      new Animal (5,'Mouse','https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/%D0%9C%D1%8B%D1%88%D1%8C_2.jpg/1200px-%D0%9C%D1%8B%D1%88%D1%8C_2.jpg'),
      new Animal (5,'Bunny','https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rabbit_in_montana.jpg/250px-Rabbit_in_montana.jpg'),
      new Animal (5,'Crab','http://www.redorbit.com/media/uploads/2013/02/CrabsShipNoise.jpg'),
      new Animal (5,'Snail','http://constantine.typepad.com/.a/6a0120a7fc3be9970b017c3674c6bd970b-800wi'),
      new Animal (5,'Shrimp','https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Heterocarpus_ensifer.jpg/230px-Heterocarpus_ensifer.jpg'),
    ]






  }


  getAnimals() : PyramidRow[]{


    var count = 1;
    var i:number ;

      for(i=1; i<6; i++) {
        var rows : PyramidRow[];
        var temp : Animal[] = [];

           this.initAnimals.forEach(animal => {
              if(animal.pyramidLevel == i){
                      temp.push(animal);
              }
          });

          if(temp.length > 0){
            console.log(temp)
            this.animals.push(new PyramidRow(temp))
          }


      }

    return this.animals;
  }

  addAnimal(rank:number,name:string,image:string){

    var Break = {}

    this.animals.forEach(row => {
      if(row.animals[0].pyramidLevel == rank){
        row.animals.push(new Animal(rank,name,image))

      }else{
        this.animals.push(new PyramidRow([new Animal(rank,name,image)]));
        throw Break;
      }
    })

  }


}
