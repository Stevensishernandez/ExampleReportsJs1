const comp = JSON.parse(localStorage.getItem('config'));

document.getElementById('Company').innerHTML = `<h5 class="page-info text-secondary-d1">
                                                    <small class="page-info">
                                                        <i class="fas fa-building"></i>
                                                    </small>
                                                    ${comp.name}
                                                    </h5>

                                                    <small class="page-info">
                                                    <i class="fas fa-map-marker-alt"></i>
                                                    ${comp.address}
                                                    </small> 
                                                    <small class="page-info">
                                                    <i class="fas fa-mobile-alt"></i>
                                                    ${comp.phone}
                                                    </small>`;