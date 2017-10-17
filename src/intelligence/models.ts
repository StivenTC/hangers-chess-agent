export class Models {
	
	constructor() {

	}

	public getModelsWhite(){
		return [
		    {input: 
		        [0, 0, 2, 0, 0, 
		         0, 0, 2, 0, 0,
		         0, 0, 0, 0, 0,
		         0, 0, 2, 0, 0,
		         0, 0, 2, 0, 0,
				], output: [0, 1, 0, 0]}, //Inicio
			{input: 
		        [0, 0, 0, 0, 0, 
		         0, 0, 0, 0, 0,
		         0, 1, 0, 0, 0,
		         0, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		        ], output: [0, 0, 0, 3]}, //No puede mover al frente
		    {input: 
		        [0, 0, 0, 0, 0, 
		         0, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		        ], output: [0, 1, 0, 0]}, //Mover adelante
		    {input: 
		        [0, 0, 0, 0, 0, 
		         0, 1, 0, 0, 0,
		         0, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		        ], output: [0, 0, 1, 0]}, //Comer arriba
		    {input: 
		        [0, 0, 0, 0, 0, 
		         0, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		         0, 1, 0, 0, 0,
		         0, 0, 0, 0, 0,
		        ], output: [0, 0, 0, 1]}, //Comer abajo
		    {input: 
		        [0, 0, 0, 0, 0, 
		         1, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		        ], output: [0, 0, 1, 0]}, //Deducir movimiento arriba
		    {input: 
		        [0, 0, 0, 0, 0, 
		         0, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		         1, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		        ], output: [0, 0, 0, 1]}, //Deducir movimiento abajo
		    {input: 
		        [0, 0, 0, 0, 0, 
		         0, 0, 0, 2, 0,
		         0, 0, 0, 0, 0,
		         0, 0, 0, 2, 0,
		         0, 0, 0, 0, 0,
		        ], output: [0, 1, 0, 0]}, //Correr
		    {input: 
		        [1, 0, 0, 0, 0, 
		         0, 1, 0, 0, 0,
		         0, 0, 1, 0, 0,
		         0, 0, 0, 0, 0,
		         0, 0, 0, 0, 0,
		        ], output: [0, 1, 0, 0]},
		    {input: 
		        [1, 0, 0, 0, 0, 
		         0, 1, 0, 0, 0,
		         0, 0, 0, 0, 0,
		         0, 1, 0, 2, 0,
		         1, 0, 0, 0, 0,
		        ], output: [0, 1, 0, 0]},
		    {input: 
		        [1, 0, 0, 0, 0, 
		         1, 0, 0, 0, 0,
		         0, 0, 1, 0, 0,
		         1, 0, 0, 2, 0,
		         1, 0, 0, 0, 0,
		        ], output: [0, 1, 0, 0]},
		    {input: 
		        [1, 0, 0, 0, 2, 
		         1, 0, 0, 0, 2,
		         1, 0, 0, 0, 0,
		         1, 0, 0, 0, 2,
		         1, 0, 0, 0, 2,
		        ], output: [1, 0, 0, 0]},
			{input: 
				[1, 0, 0, 0, 2, 
				1, 0, 0, 0, 2,
				1, 0, 1, 0, 0,
				1, 0, 0, 0, 2,
				1, 0, 0, 0, 2,
			], output: [0, 1, 0, 0]},
			{input: 
				[1, 0, 0, 0, 2, 
				1, 0, 2, 0, 2,
				1, 0, 1, 0, 0,
				1, 0, 2, 0, 2,
				1, 0, 0, 0, 2,
			], output: [0, 1, 0, 0]},
			{input: 
				[0, 0, 0, 0, 0, 
				1, 0, 2, 0, 0,
				1, 0, 0, 0, 0,
				0, 0, 2, 0, 0,
				0, 0, 0, 0, 0,
			], output: [0, 0, 1, 0]},	
			{input: 
				[0, 0, 0, 0, 0, 
				1, 0, 2, 0, 0,
				1, 0, 0, 0, 0,
				1, 0, 2, 0, 0,
				0, 0, 0, 0, 0,
			], output: [0, 0, 0, 1]},
			{input: 
				[0, 0, 0, 0, 0, 
				1, 0, 0, 2, 0,
				1, 0, 0, 0, 0,
				1, 0, 0, 2, 0,
				0, 0, 0, 0, 0,
			], output: [0, 1, 0, 0]}				    
		];
	}
}