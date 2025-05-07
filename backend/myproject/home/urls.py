# myproject/home/urls.py

from django.urls import path
from . import views
from .views import sse_binary_view,sse_binary_example_view


urlpatterns = [
    
    # nist sp 800-22
    path('run_frequency_test/', views.run_frequency_test, name='run_frequency_test'),
    path('run_frequency_block_test/', views.run_frequency_block_test, name='run_frequency_block_test'),
    path('run_runs_test/', views.run_runs_test, name='run_runs_test'),
    path('run_longest_one_block_test/', views.run_longest_one_block_test, name='run_longest_one_block_test'),
    path('run_approximate_entropy_test/',views.run_approximate_entropy_test, name='run_approximate_entropy_test'),
    path('run_linear_complexity_test/',views.run_linear_complexity_test, name='run_linear_test'),
    path('run_non_overlapping_test/',views.run_non_overlapping_test, name='run_non_overlapping_test'),
    path('run_overlapping_test/',views.run_overlapping_test, name='run_overlapping_test'),
    path('run_statistical_test/',views.run_statistical_test, name='run_statistical_test'),
    path('run_serial_test/',views.run_serial_test, name='run_serial_test'),
    path('run_cumulative_sums_test/',views.run_cumulative_sums_test, name='run_cumulative_sums_test'),
    path('random_excursions_test/',views.run_random_excursions_test, name='run_random_excursions_test'),
    path('random_excursions_variant_test/',views.random_excursions_variant_test, name='random_excursions_variant_test'),
    path('run_binary_matrix_rank_text/',views.run_binary_matrix_rank_text, name='run_binary_matrix_rank_test'),
    path('run_spectral_test/',views.run_spectral_test, name='run_spectral_test'),
    path('run_autocorrelation_test/',views.run_autocorrelation_test, name='run_autocorrelation_test'),
    path('run_adaptive_statistical_test/',views.run_adaptive_statistical_test, name='adaptive_statistical_test'),   

    # nist sp 800-90b
    path('run_chi_square_test/', views.run_chi_square_test, name='run_chi_square_test'),
    path('run_mcv_test/', views.run_mcv_test, name='run_mcv_test'),
    path('run_collision_test/', views.run_collision_test, name='run_collision_test'),
    path('run_markov_test/',views.run_markov_test, name='run_markov_test'),
    path('run_compression_test/',views.run_compression_test, name='run_compression_test'),
    path('run_t_tuple_test/',views.run_t_tuple_test, name='run_t_tuple_test'),
    path('run_multi_block_entropy_test/',views.run_multi_block_entropy_test, name='run_overlapping_test'),
    path('run_lz78y_test/',views.run_lz78y_test, name='run_lz78y_test'),
    path('run_min_entropy_test/',views.run_min_entropy_test, name='run_min_entropy_test'),
    path('run_predictor_test/',views.run_predictor_test, name='run_predictor_test'),

    # dieharder tests
    path('run_binary_spacings_test/',views.run_birthday_spacings_test, name='binary_spacings_test'),  
    path('run_parking_lot_test/',views.run_parking_lot_test, name='run_parking_lot_test'),  
    path('run_overlapping_5_test/',views.run_overlapping_5_test, name='run_overlapping_5_test'),  
    path('run_minimum_distance_test/',views.run_minimum_distance_test, name='run_minimum_distance_test'),  
    path('run_31matrix_test/',views.run_31matrix_test, name='run_31matrix_test'),  
    path('run_spheres_test/',views.run_spheres_test, name='run_spheres_test'),  
    path('run_32matrix_test/',views.run_32matrix_test, name='run_32matrix_test'),  
    path('run_craps_test/',views.run_craps_test, name='run_craps_test'),  
    path('run_bitstream_test/',views.run_bitstream_test, name='run_bitstream_test'),  
    path('run_gcd_test/',views.run_gcd_test, name='run_gcd_test'),  
    path('run_opso_test/',views.run_opso_test, name='run_opso_test'),  
    path('run_oqso_test/',views.run_oqso_test, name='run_oqso_test'),  
    path('run_dna_test/',views.run_dna_test, name='run_dna_test'),  
    path('run_count_one_test/',views.run_count_one_test, name='run_count_one_test'),  
    path('run_count_one_byte_test/',views.run_count_one_byte_test, name='run_count_one_byte_test'),  
    path('run_simple_gcd_test/',views.run_simple_gcd_test, name='run_simple_gcd_test'),  
    path('run_general_minimum_distance_test/',views.run_general_minimum_distance_test, name='run_general_minimum_distance_test'),  
    path('run_u01_linear_complexity_test/',views.run_u01_linear_complexity_test, name='run_u01_linear_complexity_test'),  
    path('run_u01_longest_repeated_substring_test/',views.run_u01_longest_repeated_substring_test, name='run_u01_longest_repeated_substring_test'),  
    path('run_matrix_rank_test/',views.run_matrix_rank_test, name='run_matrix_rank_test'),  
    
    #report generation
    path('pdf-report/', views.generate_pdf_report, name='generate_pdf_report'),
    path('pdf-report-nist90b/', views.generate_pdf_report_nist90b, name='generate_pdf_report'),
    path('pdf-report-dieharder/', views.generate_pdf_report_dieharder, name='generate_pdf_report_dieharder'),
    path('pdf-report-server/', views.generate_pdf_report_server, name='generate_pdf_report_server'),
    
    
    #graph generation
    path('graph-generation/', views.create_graph, name='create_graph'),
    path('graph-generation-nist90b/', views.create_graph_nist90b, name='create_graph_nist90b'),
    path('graph-generaion-dieharder/', views.create_graph_dieharder, name='create_graph_dieharder'),
    
    path('generate_final_ans/', views.generate_final_ans, name='generate_final_ans'),
    path('generate_final_ans_nist90b/', views.generate_final_ans_nist90b, name='generate_final_ans_nist90b'),
    path('generate_final_ans_dieharder/', views.generate_final_ans_dieharder, name='generate_final_ans_dieharder'),
]

# http://127.0.0.1:8000/sse_binary_example/