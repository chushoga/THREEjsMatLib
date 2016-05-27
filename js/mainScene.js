/* GLOBAL VARS */
var scene, camera, mainLight;

// starter objects

/* texture loader */
var loadingManager = new THREE.LoadingManager();

/* MATERIALS */

//put into a function for easy management
/* materials */
	materialMatCap = new THREE.ShaderMaterial( {

			uniforms: { 
				tMatCap: { 
					type: 't', 
					value: THREE.ImageUtils.loadTexture( 'images/silver.jpg' ) 
				},
			},
			vertexShader: document.getElementById( 'sem-vs' ).textContent,
			fragmentShader: document.getElementById( 'sem-fs' ).textContent,
			shading: THREE.SmoothShading,
            side: THREE.DoubleSide
			
		} );

		materialMatCap.uniforms.tMatCap.value.wrapS = 
		materialMatCap.uniforms.tMatCap.value.wrapT = 
		THREE.ClampToEdgeWrapping;

		
/* LOAD MANAGER */
// call animate if passes all loaded things

/* INIT */
function init(){
	/* CHECK FOR WEBGL */
	
	// camera
	// lights
	
}

/* ANIMATE */
function animate(){
	update();
	render();
}

/* UPDATE */
function update(){
	
}

/* RENDER */
function render(){
	
}