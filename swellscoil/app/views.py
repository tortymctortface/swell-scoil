from django.http import JsonResponse

def example_view(request, param1, param2):
    data = {
        'param1': param1,
        'param2': param2
    }
    return JsonResponse(data)