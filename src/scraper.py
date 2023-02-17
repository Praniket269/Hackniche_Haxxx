import requests
from bs4 import BeautifulSoup

# URL of the Services portal page containing schemes for servicemen and their families
url = 'https://services.india.gov.in/service/subcategory/defence-and-national-security-22'

# Send an HTTP GET request to the URL
try: 
    response = requests.get(url)
except requests.exceptions.RequestException as e:
    print(e)
    sys.exit(1)

# Parse the response content using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

# Find all the scheme links on the page
scheme_links = soup.find_all('a', class_='service_link')

# Print the details of each scheme
for link in scheme_links:
    scheme_url = 'https://services.india.gov.in' + link['href']
    scheme_name = link.find('h3').text.strip()
    scheme_desc = link.find('div', class_='service_text').text.strip()
    print('Scheme Name:', scheme_name)
    print('Scheme Description:', scheme_desc)
    print('Scheme URL:', scheme_url)
    print('\n')