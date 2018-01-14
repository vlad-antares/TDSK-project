///////////slider-range////////////

if ($( "#slider-range" ).length) {
    $( "#slider-range" ).slider({
      range: true,
      min: 20000,
      max: 100000,
      values: [ 35000, 80000 ],
      slide: function( event, ui ) {
        $( "#amount1" ).val( ui.values[ 0 ]);
        $( "#amount2" ).val( ui.values[ 1 ]);
      }
    });
    $( "#amount1" ).val(  $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount2" ).val(  $( "#slider-range" ).slider( "values", 1 ));
}

if ($( "#slider-range_2" ).length) {
    $( "#slider-range_2" ).slider({
      range: true,
      min: 1,
      max: 25,
      values: [ 5, 10 ],
      slide: function( event, ui ) {
        $( "#amount3" ).val( ui.values[ 0 ]);
        $( "#amount4" ).val( ui.values[ 1 ]);
      }
    });
    $( "#amount3" ).val(  $( "#slider-range_2" ).slider( "values", 0 ));
    $( "#amount4" ).val(  $( "#slider-range_2" ).slider( "values", 1 ));
}


if ($( "#slider-range_3" ).length) {
    $( "#slider-range_3" ).slider({
      range: true,
      min: 1,
      max: 25,
      values: [ 5, 10 ],
      slide: function( event, ui ) {
        $( "#amount5" ).val( ui.values[ 0 ]);
        $( "#amount6" ).val( ui.values[ 1 ]);
      }
    });
    $( "#amount5" ).val(  $( "#slider-range_3" ).slider( "values", 0 ));
    $( "#amount6" ).val(  $( "#slider-range_3" ).slider( "values", 1 ));
}


if ($( "#slider-range10" ).length) {
    $( "#slider-range10" ).slider({
      range: true,
      min: 20000,
      max: 100000,
      values: [ 35000, 80000 ],
      slide: function( event, ui ) {
        $( "#amount11" ).val( ui.values[ 0 ]);
        $( "#amount12" ).val( ui.values[ 1 ]);
      }
    });
    $( "#amount11" ).val(  $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount12" ).val(  $( "#slider-range" ).slider( "values", 1 ));
}